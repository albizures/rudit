import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const любить: PerfectVerb = {
  name: Word('любить', 3),
  singular1stPerson: Word('люблю', 4),
  singular2ndPerson: Word('любишь', 1),
  singular3rdPerson: Word('любит', 1),
  plural1stPerson: Word('любим', 1),
  plural2ndPerson: Word('любите', 1),
  plural3rdPerson: Word('любят', 1),
  masculinePast: Word('любил', 3),
  femininePast: Word('любила', 3),
  neuterPast: Word('любило', 3),
  pluralPast: Word('любили', 3),
  imperativeInformal: Word('люби', 3),
  imperativeFormal: Word('любите', 3),
  imperfect: ['полюбить'],
};

perfectVerbs.set(любить.name.text, любить);

export { любить };