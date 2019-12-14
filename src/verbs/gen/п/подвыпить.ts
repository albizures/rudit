import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвыпить: PerfectVerb = {
  name: Word('подвыпить', 4),
  singular1stPerson: Word('подвыпью', 4),
  singular2ndPerson: Word('подвыпьешь', 4),
  singular3rdPerson: Word('подвыпьет', 4),
  plural1stPerson: Word('подвыпьем', 4),
  plural2ndPerson: Word('подвыпьете', 4),
  plural3rdPerson: Word('подвыпьют', 4),
  masculinePast: Word('подвыпил', 4),
  femininePast: Word('подвыпила', 4),
  neuterPast: Word('подвыпило', 4),
  pluralPast: Word('подвыпили', 4),
  imperativeInformal: Word('подвыпей', 4),
  imperativeFormal: Word('подвыпейте', 4),
  imperfect: [],
};

perfectVerbs.set(подвыпить.name.text, подвыпить);

export { подвыпить };