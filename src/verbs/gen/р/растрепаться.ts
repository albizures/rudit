import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрепаться: PerfectVerb = {
  name: Word('растрепаться', 7),
  singular1stPerson: Word('растреплюсь', 8),
  singular2ndPerson: Word('растреплешься', 5),
  singular3rdPerson: Word('растреплется', 5),
  plural1stPerson: Word('растреплемся', 5),
  plural2ndPerson: Word('растреплетесь', 5),
  plural3rdPerson: Word('растреплются', 5),
  masculinePast: Word('растрепался', 7),
  femininePast: Word('растрепалась', 7),
  neuterPast: Word('растрепалось', 7),
  pluralPast: Word('растрепались', 7),
  imperativeInformal: Word('растреплись', 8),
  imperativeFormal: Word('растреплитесь', 8),
  imperfect: [],
};

perfectVerbs.set(растрепаться.name.text, растрепаться);

export { растрепаться };