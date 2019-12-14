import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набиваться: PerfectVerb = {
  name: Word('набиваться', 5),
  singular1stPerson: Word('набиваюсь', 5),
  singular2ndPerson: Word('набиваешься', 5),
  singular3rdPerson: Word('набивается', 5),
  plural1stPerson: Word('набиваемся', 5),
  plural2ndPerson: Word('набиваетесь', 5),
  plural3rdPerson: Word('набиваются', 5),
  masculinePast: Word('набивался', 5),
  femininePast: Word('набивалась', 5),
  neuterPast: Word('набивалось', 5),
  pluralPast: Word('набивались', 5),
  imperativeInformal: Word('набивайся', 5),
  imperativeFormal: Word('набивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(набиваться.name.text, набиваться);

export { набиваться };