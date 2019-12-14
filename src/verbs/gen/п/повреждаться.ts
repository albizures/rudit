import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повреждаться: PerfectVerb = {
  name: Word('повреждаться', 7),
  singular1stPerson: Word('повреждаюсь', 7),
  singular2ndPerson: Word('повреждаешься', 7),
  singular3rdPerson: Word('повреждается', 7),
  plural1stPerson: Word('повреждаемся', 7),
  plural2ndPerson: Word('повреждаетесь', 7),
  plural3rdPerson: Word('повреждаются', 7),
  masculinePast: Word('повреждался', 7),
  femininePast: Word('повреждалась', 7),
  neuterPast: Word('повреждалось', 7),
  pluralPast: Word('повреждались', 7),
  imperativeInformal: Word('повреждайся', 7),
  imperativeFormal: Word('повреждайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(повреждаться.name.text, повреждаться);

export { повреждаться };