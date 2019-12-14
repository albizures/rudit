import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влить: PerfectVerb = {
  name: Word('влить', 2),
  singular1stPerson: Word('волью', 4),
  singular2ndPerson: Word('вольёшь', 1),
  singular3rdPerson: Word('вольёт', 1),
  plural1stPerson: Word('вольём', 1),
  plural2ndPerson: Word('вольёте', 6),
  plural3rdPerson: Word('вольют', 4),
  masculinePast: Word('влил', 2),
  femininePast: Word('влила', 4),
  neuterPast: Word('влило', 2),
  pluralPast: Word('влили', 2),
  imperativeInformal: Word('влей', 2),
  imperativeFormal: Word('влейте', 2),
  imperfect: [],
};

perfectVerbs.set(влить.name.text, влить);

export { влить };