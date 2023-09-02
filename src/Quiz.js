import React from 'react'

const Quiz = () => {
  return (
    <div>
      <div class="d-flex  justify-content-lg-center align-items-center">
        <ul class="list-group">
          <li class="list-group-item">
          <label class="form-check-label" for="exampleRadios1">
                  Have you attached a file in email instead of confluence link or shared link?
                </label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                <label class="form-check-label" for="exampleRadios1">
                  Yes
                </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label class="form-check-label" for="exampleRadios2">
                  No
                </label>
            </div>
          </li>
          <li class="list-group-item">
          <label class="form-check-label" for="exampleRadios2">
                  Have you replied only with "Thank you" for an Email?
                </label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios3" value="option3" />
                <label class="form-check-label" for="exampleRadios3">
                  Yes
                </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios4" value="option4"/>
                <label class="form-check-label" for="exampleRadios4">
                  No
                </label>
            </div>
          </li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  )
}

export default Quiz