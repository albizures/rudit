import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доклеить: PerfectVerb = {
  name: Word('доклеить', 4),
  singular1stPerson: Word('доклею', 4),
  singular2ndPerson: Word('доклеишь', 4),
  singular3rdPerson: Word('доклеит', 4),
  plural1stPerson: Word('доклеим', 4),
  plural2ndPerson: Word('доклеите', 4),
  plural3rdPerson: Word('доклеят', 4),
  masculinePast: Word('доклеил', 4),
  femininePast: Word('доклеила', 4),
  neuterPast: Word('доклеило', 4),
  pluralPast: Word('доклеили', 4),
  imperativeInformal: Word('доклей', 4),
  imperativeFormal: Word('доклейте', 4),
  imperfect: [],
};

perfectVerbs.set(доклеить.name.text, доклеить);

export { доклеить };