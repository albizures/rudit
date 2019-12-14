import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набегаться: PerfectVerb = {
  name: Word('набегаться', 3),
  singular1stPerson: Word('набегаюсь', 3),
  singular2ndPerson: Word('набегаешься', 3),
  singular3rdPerson: Word('набегается', 3),
  plural1stPerson: Word('набегаемся', 3),
  plural2ndPerson: Word('набегаетесь', 3),
  plural3rdPerson: Word('набегаются', 3),
  masculinePast: Word('набегался', 3),
  femininePast: Word('набегалась', 3),
  neuterPast: Word('набегалось', 3),
  pluralPast: Word('набегались', 3),
  imperativeInformal: Word('набегайся', 3),
  imperativeFormal: Word('набегайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(набегаться.name.text, набегаться);

export { набегаться };