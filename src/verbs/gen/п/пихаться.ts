import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пихаться: PerfectVerb = {
  name: Word('пихаться', 3),
  singular1stPerson: Word('пихаюсь', 3),
  singular2ndPerson: Word('пихаешься', 3),
  singular3rdPerson: Word('пихается', 3),
  plural1stPerson: Word('пихаемся', 3),
  plural2ndPerson: Word('пихаетесь', 3),
  plural3rdPerson: Word('пихаются', 3),
  masculinePast: Word('пихался', 3),
  femininePast: Word('пихалась', 3),
  neuterPast: Word('пихалось', 3),
  pluralPast: Word('пихались', 3),
  imperativeInformal: Word('пихайся', 3),
  imperativeFormal: Word('пихайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(пихаться.name.text, пихаться);

export { пихаться };