import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воскресить: PerfectVerb = {
  name: Word('воскресить', 7),
  singular1stPerson: Word('воскрешу', 7),
  singular2ndPerson: Word('воскресишь', 7),
  singular3rdPerson: Word('воскресит', 7),
  plural1stPerson: Word('воскресим', 7),
  plural2ndPerson: Word('воскресите', 7),
  plural3rdPerson: Word('воскресят', 7),
  masculinePast: Word('воскресил', 7),
  femininePast: Word('воскресила', 7),
  neuterPast: Word('воскресило', 7),
  pluralPast: Word('воскресили', 7),
  imperativeInformal: Word('воскреси', 7),
  imperativeFormal: Word('воскресите', 7),
  imperfect: [],
};

perfectVerbs.set(воскресить.name.text, воскресить);

export { воскресить };