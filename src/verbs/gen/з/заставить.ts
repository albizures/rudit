import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заставить: PerfectVerb = {
  name: Word('заставить', 4),
  singular1stPerson: Word('заставлю', 4),
  singular2ndPerson: Word('заставишь', 4),
  singular3rdPerson: Word('заставит', 4),
  plural1stPerson: Word('заставим', 4),
  plural2ndPerson: Word('заставите', 4),
  plural3rdPerson: Word('заставят', 4),
  masculinePast: Word('заставил', 4),
  femininePast: Word('заставила', 4),
  neuterPast: Word('заставило', 4),
  pluralPast: Word('заставили', 4),
  imperativeInformal: Word('заставь', 4),
  imperativeFormal: Word('заставьте', 4),
  imperfect: ['заставлять'],
};

perfectVerbs.set(заставить.name.text, заставить);

export { заставить };