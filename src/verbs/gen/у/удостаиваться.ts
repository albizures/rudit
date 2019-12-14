import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостаиваться: PerfectVerb = {
  name: Word('удостаиваться', 5),
  singular1stPerson: Word('удостаиваюсь', 5),
  singular2ndPerson: Word('удостаиваешься', 5),
  singular3rdPerson: Word('удостаивается', 5),
  plural1stPerson: Word('удостаиваемся', 5),
  plural2ndPerson: Word('удостаиваетесь', 5),
  plural3rdPerson: Word('удостаиваются', 5),
  masculinePast: Word('удостаивался', 5),
  femininePast: Word('удостаивалась', 5),
  neuterPast: Word('удостаивалось', 5),
  pluralPast: Word('удостаивались', 5),
  imperativeInformal: Word('удостаивайся', 5),
  imperativeFormal: Word('удостаивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(удостаиваться.name.text, удостаиваться);

export { удостаиваться };