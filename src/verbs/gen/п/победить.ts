import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const победить: PerfectVerb = {
  name: Word('победить', 5),
  singular1stPerson: Word('побежу', 5),
  singular2ndPerson: Word('победишь', 5),
  singular3rdPerson: Word('победит', 5),
  plural1stPerson: Word('победим', 5),
  plural2ndPerson: Word('победите', 5),
  plural3rdPerson: Word('победят', 5),
  masculinePast: Word('победил', 5),
  femininePast: Word('победила', 5),
  neuterPast: Word('победило', 5),
  pluralPast: Word('победили', 5),
  imperativeInformal: Word('победи', 5),
  imperativeFormal: Word('победите', 5),
  imperfect: ['побеждать'],
};

perfectVerbs.set(победить.name.text, победить);

export { победить };