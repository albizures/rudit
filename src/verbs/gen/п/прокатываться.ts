import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокатываться: PerfectVerb = {
  name: Word('прокатываться', 4),
  singular1stPerson: Word('прокатываюсь', 4),
  singular2ndPerson: Word('прокатываешься', 4),
  singular3rdPerson: Word('прокатывается', 4),
  plural1stPerson: Word('прокатываемся', 4),
  plural2ndPerson: Word('прокатываетесь', 4),
  plural3rdPerson: Word('прокатываются', 4),
  masculinePast: Word('прокатывался', 4),
  femininePast: Word('прокатывалась', 4),
  neuterPast: Word('прокатывалось', 4),
  pluralPast: Word('прокатывались', 4),
  imperativeInformal: Word('прокатывайся', 4),
  imperativeFormal: Word('прокатывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прокатываться.name.text, прокатываться);

export { прокатываться };