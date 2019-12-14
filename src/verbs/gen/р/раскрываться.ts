import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрываться: PerfectVerb = {
  name: Word('раскрываться', 7),
  singular1stPerson: Word('раскрываюсь', 7),
  singular2ndPerson: Word('раскрываешься', 7),
  singular3rdPerson: Word('раскрывается', 7),
  plural1stPerson: Word('раскрываемся', 7),
  plural2ndPerson: Word('раскрываетесь', 7),
  plural3rdPerson: Word('раскрываются', 7),
  masculinePast: Word('раскрывался', 7),
  femininePast: Word('раскрывалась', 7),
  neuterPast: Word('раскрывалось', 7),
  pluralPast: Word('раскрывались', 7),
  imperativeInformal: Word('раскрывайся', 7),
  imperativeFormal: Word('раскрывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(раскрываться.name.text, раскрываться);

export { раскрываться };