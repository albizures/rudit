import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пикироваться: PerfectVerb = {
  name: Word('пикироваться', 7),
  singular1stPerson: Word('пикируюсь', 5),
  singular2ndPerson: Word('пикируешься', 5),
  singular3rdPerson: Word('пикируется', 5),
  plural1stPerson: Word('пикируемся', 5),
  plural2ndPerson: Word('пикируетесь', 5),
  plural3rdPerson: Word('пикируются', 5),
  masculinePast: Word('пикировался', 7),
  femininePast: Word('пикировалась', 7),
  neuterPast: Word('пикировалось', 7),
  pluralPast: Word('пикировались', 7),
  imperativeInformal: Word('пикируйся', 5),
  imperativeFormal: Word('пикируйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пикироваться.name.text, пикироваться);

export { пикироваться };