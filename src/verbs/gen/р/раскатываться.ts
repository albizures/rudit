import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскатываться: PerfectVerb = {
  name: Word('раскатываться', 4),
  singular1stPerson: Word('раскатываюсь', 4),
  singular2ndPerson: Word('раскатываешься', 4),
  singular3rdPerson: Word('раскатывается', 4),
  plural1stPerson: Word('раскатываемся', 4),
  plural2ndPerson: Word('раскатываетесь', 4),
  plural3rdPerson: Word('раскатываются', 4),
  masculinePast: Word('раскатывался', 4),
  femininePast: Word('раскатывалась', 4),
  neuterPast: Word('раскатывалось', 4),
  pluralPast: Word('раскатывались', 4),
  imperativeInformal: Word('раскатывайся', 4),
  imperativeFormal: Word('раскатывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскатываться.name.text, раскатываться);

export { раскатываться };