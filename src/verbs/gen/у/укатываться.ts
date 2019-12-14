import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укатываться: PerfectVerb = {
  name: Word('укатываться', 6),
  singular1stPerson: Word('укатываюсь', 6),
  singular2ndPerson: Word('укатываешься', 6),
  singular3rdPerson: Word('укатывается', 6),
  plural1stPerson: Word('укатываемся', 6),
  plural2ndPerson: Word('укатываетесь', 6),
  plural3rdPerson: Word('укатываются', 6),
  masculinePast: Word('укатывался', 6),
  femininePast: Word('укатывалась', 6),
  neuterPast: Word('укатывалось', 6),
  pluralPast: Word('укатывались', 6),
  imperativeInformal: Word('укатывайся', 6),
  imperativeFormal: Word('укатывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(укатываться.name.text, укатываться);

export { укатываться };