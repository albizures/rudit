import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полюбить: PerfectVerb = {
  name: Word('полюбить', 5),
  singular1stPerson: Word('полюблю', 6),
  singular2ndPerson: Word('полюбишь', 3),
  singular3rdPerson: Word('полюбит', 3),
  plural1stPerson: Word('полюбим', 3),
  plural2ndPerson: Word('полюбите', 3),
  plural3rdPerson: Word('полюбят', 3),
  masculinePast: Word('полюбил', 5),
  femininePast: Word('полюбила', 5),
  neuterPast: Word('полюбило', 5),
  pluralPast: Word('полюбили', 5),
  imperativeInformal: Word('полюби', 5),
  imperativeFormal: Word('полюбите', 5),
  imperfect: ['любить'],
};

perfectVerbs.set(полюбить.name.text, полюбить);

export { полюбить };