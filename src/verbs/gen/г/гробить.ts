import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гробить: PerfectVerb = {
  name: Word('гробить', 2),
  singular1stPerson: Word('гроблю', 2),
  singular2ndPerson: Word('гробишь', 2),
  singular3rdPerson: Word('гробит', 2),
  plural1stPerson: Word('гробим', 2),
  plural2ndPerson: Word('гробите', 2),
  plural3rdPerson: Word('гробят', 2),
  masculinePast: Word('гробил', 2),
  femininePast: Word('гробила', 2),
  neuterPast: Word('гробило', 2),
  pluralPast: Word('гробили', 2),
  imperativeInformal: Word('гробь', 2),
  imperativeFormal: Word('гробьте', 2),
  imperfect: [],
};

perfectVerbs.set(гробить.name.text, гробить);

export { гробить };