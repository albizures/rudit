import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 3;

const read: Verb = {
  name: Word('готовить', stress),
  singular1stPerson: Word('гото́влю', stress),
  singular2ndPerson: Word('гото́вишь', stress),
  singular3rdPerson: Word('гото́вит', stress),
  plural1stPerson: Word('гото́вим', stress),
  plural2ndPerson: Word('гото́вите', stress),
  plural3rdPerson: Word('гото́вят', stress),
  masculinePast: Word('гото́вил', stress),
  femininePast: Word('гото́вила', stress),
  neuterPast: Word('гото́вило', stress),
  pluralPast: Word('гото́вили', stress),
  imperativeInformal: Word('гото́вь', stress),
  imperativeFormal: Word('гото́вьте', stress),
};

export default read;
