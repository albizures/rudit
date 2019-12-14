import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const членить: PerfectVerb = {
  name: Word('членить', 4),
  singular1stPerson: Word('членю', 4),
  singular2ndPerson: Word('членишь', 4),
  singular3rdPerson: Word('членит', 4),
  plural1stPerson: Word('членим', 4),
  plural2ndPerson: Word('члените', 4),
  plural3rdPerson: Word('членят', 4),
  masculinePast: Word('членил', 4),
  femininePast: Word('членила', 4),
  neuterPast: Word('членило', 4),
  pluralPast: Word('членили', 4),
  imperativeInformal: Word('члени', 4),
  imperativeFormal: Word('члените', 4),
  imperfect: [],
};

perfectVerbs.set(членить.name.text, членить);

export { членить };