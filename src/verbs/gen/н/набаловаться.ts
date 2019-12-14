import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набаловаться: PerfectVerb = {
  name: Word('набаловаться', 7),
  singular1stPerson: Word('набалуюсь', 5),
  singular2ndPerson: Word('набалуешься', 5),
  singular3rdPerson: Word('набалуется', 5),
  plural1stPerson: Word('набалуемся', 5),
  plural2ndPerson: Word('набалуетесь', 5),
  plural3rdPerson: Word('набалуются', 5),
  masculinePast: Word('набаловался', 7),
  femininePast: Word('набаловалась', 7),
  neuterPast: Word('набаловалось', 7),
  pluralPast: Word('набаловались', 7),
  imperativeInformal: Word('набалуйся', 5),
  imperativeFormal: Word('набалуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(набаловаться.name.text, набаловаться);

export { набаловаться };