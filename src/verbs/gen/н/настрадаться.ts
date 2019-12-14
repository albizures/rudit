import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настрадаться: PerfectVerb = {
  name: Word('настрадаться', 7),
  singular1stPerson: Word('настрадаюсь', 7),
  singular2ndPerson: Word('настрадаешься', 7),
  singular3rdPerson: Word('настрадается', 7),
  plural1stPerson: Word('настрадаемся', 7),
  plural2ndPerson: Word('настрадаетесь', 7),
  plural3rdPerson: Word('настрадаются', 7),
  masculinePast: Word('настрадался', 7),
  femininePast: Word('настрадалась', 7),
  neuterPast: Word('настрадалось', 7),
  pluralPast: Word('настрадались', 7),
  imperativeInformal: Word('настрадайся', 7),
  imperativeFormal: Word('настрадайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(настрадаться.name.text, настрадаться);

export { настрадаться };