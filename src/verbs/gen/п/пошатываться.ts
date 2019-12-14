import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошатываться: PerfectVerb = {
  name: Word('пошатываться', 3),
  singular1stPerson: Word('пошатываюсь', 3),
  singular2ndPerson: Word('пошатываешься', 3),
  singular3rdPerson: Word('пошатывается', 3),
  plural1stPerson: Word('пошатываемся', 3),
  plural2ndPerson: Word('пошатываетесь', 3),
  plural3rdPerson: Word('пошатываются', 3),
  masculinePast: Word('пошатывался', 3),
  femininePast: Word('пошатывалась', 3),
  neuterPast: Word('пошатывалось', 3),
  pluralPast: Word('пошатывались', 3),
  imperativeInformal: Word('пошатывайся', 3),
  imperativeFormal: Word('пошатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(пошатываться.name.text, пошатываться);

export { пошатываться };