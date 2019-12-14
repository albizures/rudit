import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долбить: PerfectVerb = {
  name: Word('долбить', 4),
  singular1stPerson: Word('долблю', 5),
  singular2ndPerson: Word('долбишь', 4),
  singular3rdPerson: Word('долбит', 4),
  plural1stPerson: Word('долбим', 4),
  plural2ndPerson: Word('долбите', 4),
  plural3rdPerson: Word('долбят', 4),
  masculinePast: Word('долбил', 4),
  femininePast: Word('долбила', 4),
  neuterPast: Word('долбило', 4),
  pluralPast: Word('долбили', 4),
  imperativeInformal: Word('долби', 4),
  imperativeFormal: Word('долбите', 4),
  imperfect: [],
};

perfectVerbs.set(долбить.name.text, долбить);

export { долбить };