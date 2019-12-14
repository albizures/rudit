import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отказываться: PerfectVerb = {
  name: Word('отказываться', 3),
  singular1stPerson: Word('отказываюсь', 3),
  singular2ndPerson: Word('отказываешься', 3),
  singular3rdPerson: Word('отказывается', 3),
  plural1stPerson: Word('отказываемся', 3),
  plural2ndPerson: Word('отказываетесь', 3),
  plural3rdPerson: Word('отказываются', 3),
  masculinePast: Word('отказывался', 3),
  femininePast: Word('отказывалась', 3),
  neuterPast: Word('отказывалось', 3),
  pluralPast: Word('отказывались', 3),
  imperativeInformal: Word('отказывайся', 3),
  imperativeFormal: Word('отказывайтесь', 3),
  imperfect: ['отказаться'],
};

perfectVerbs.set(отказываться.name.text, отказываться);

export { отказываться };