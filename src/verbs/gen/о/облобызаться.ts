import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облобызаться: PerfectVerb = {
  name: Word('облобызаться', 7),
  singular1stPerson: Word('облобызаюсь', 7),
  singular2ndPerson: Word('облобызаешься', 7),
  singular3rdPerson: Word('облобызается', 7),
  plural1stPerson: Word('облобызаемся', 7),
  plural2ndPerson: Word('облобызаетесь', 7),
  plural3rdPerson: Word('облобызаются', 7),
  masculinePast: Word('облобызался', 7),
  femininePast: Word('облобызалась', 7),
  neuterPast: Word('облобызалось', 7),
  pluralPast: Word('облобызались', 7),
  imperativeInformal: Word('облобызайся', 7),
  imperativeFormal: Word('облобызайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(облобызаться.name.text, облобызаться);

export { облобызаться };