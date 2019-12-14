import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возбуждаться: PerfectVerb = {
  name: Word('возбуждаться', 7),
  singular1stPerson: Word('возбуждаюсь', 7),
  singular2ndPerson: Word('возбуждаешься', 7),
  singular3rdPerson: Word('возбуждается', 7),
  plural1stPerson: Word('возбуждаемся', 7),
  plural2ndPerson: Word('возбуждаетесь', 7),
  plural3rdPerson: Word('возбуждаются', 7),
  masculinePast: Word('возбуждался', 7),
  femininePast: Word('возбуждалась', 7),
  neuterPast: Word('возбуждалось', 7),
  pluralPast: Word('возбуждались', 7),
  imperativeInformal: Word('возбуждайся', 7),
  imperativeFormal: Word('возбуждайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(возбуждаться.name.text, возбуждаться);

export { возбуждаться };