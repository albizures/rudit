import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const означить: PerfectVerb = {
  name: Word('означить', 3),
  singular1stPerson: Word('означу', 3),
  singular2ndPerson: Word('означишь', 3),
  singular3rdPerson: Word('означит', 3),
  plural1stPerson: Word('означим', 3),
  plural2ndPerson: Word('означите', 3),
  plural3rdPerson: Word('означат', 3),
  masculinePast: Word('означил', 3),
  femininePast: Word('означила', 3),
  neuterPast: Word('означило', 3),
  pluralPast: Word('означили', 3),
  imperativeInformal: Word('означь', 3),
  imperativeFormal: Word('означьте', 3),
  imperfect: [],
};

perfectVerbs.set(означить.name.text, означить);

export { означить };