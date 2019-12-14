import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заблуждаться: PerfectVerb = {
  name: Word('заблуждаться', 7),
  singular1stPerson: Word('заблуждаюсь', 7),
  singular2ndPerson: Word('заблуждаешься', 7),
  singular3rdPerson: Word('заблуждается', 7),
  plural1stPerson: Word('заблуждаемся', 7),
  plural2ndPerson: Word('заблуждаетесь', 7),
  plural3rdPerson: Word('заблуждаются', 7),
  masculinePast: Word('заблуждался', 7),
  femininePast: Word('заблуждалась', 7),
  neuterPast: Word('заблуждалось', 7),
  pluralPast: Word('заблуждались', 7),
  imperativeInformal: Word('заблуждайся', 7),
  imperativeFormal: Word('заблуждайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(заблуждаться.name.text, заблуждаться);

export { заблуждаться };