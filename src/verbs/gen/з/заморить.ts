import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заморить: PerfectVerb = {
  name: Word('заморить', 5),
  singular1stPerson: Word('заморю', 5),
  singular2ndPerson: Word('заморишь', 5),
  singular3rdPerson: Word('заморит', 5),
  plural1stPerson: Word('заморим', 5),
  plural2ndPerson: Word('заморите', 5),
  plural3rdPerson: Word('заморят', 5),
  masculinePast: Word('заморил', 5),
  femininePast: Word('заморила', 5),
  neuterPast: Word('заморило', 5),
  pluralPast: Word('заморили', 5),
  imperativeInformal: Word('замори', 5),
  imperativeFormal: Word('заморите', 5),
  imperfect: [],
};

perfectVerbs.set(заморить.name.text, заморить);

export { заморить };