import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const синить: PerfectVerb = {
  name: Word('синить', 3),
  singular1stPerson: Word('синю', 3),
  singular2ndPerson: Word('синишь', 3),
  singular3rdPerson: Word('синит', 3),
  plural1stPerson: Word('синим', 3),
  plural2ndPerson: Word('сините', 3),
  plural3rdPerson: Word('синят', 3),
  masculinePast: Word('синил', 3),
  femininePast: Word('синила', 3),
  neuterPast: Word('синило', 3),
  pluralPast: Word('синили', 3),
  imperativeInformal: Word('сини', 3),
  imperativeFormal: Word('сините', 3),
  imperfect: [],
};

perfectVerbs.set(синить.name.text, синить);

export { синить };