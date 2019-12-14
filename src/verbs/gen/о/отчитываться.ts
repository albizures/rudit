import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчитываться: PerfectVerb = {
  name: Word('отчитываться', 3),
  singular1stPerson: Word('отчитываюсь', 3),
  singular2ndPerson: Word('отчитываешься', 3),
  singular3rdPerson: Word('отчитывается', 3),
  plural1stPerson: Word('отчитываемся', 3),
  plural2ndPerson: Word('отчитываетесь', 3),
  plural3rdPerson: Word('отчитываются', 3),
  masculinePast: Word('отчитывался', 3),
  femininePast: Word('отчитывалась', 3),
  neuterPast: Word('отчитывалось', 3),
  pluralPast: Word('отчитывались', 3),
  imperativeInformal: Word('отчитывайся', 3),
  imperativeFormal: Word('отчитывайтесь', 3),
  imperfect: ['отчитаться'],
};

perfectVerbs.set(отчитываться.name.text, отчитываться);

export { отчитываться };