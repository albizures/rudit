import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застаиваться: PerfectVerb = {
  name: Word('застаиваться', 4),
  singular1stPerson: Word('застаиваюсь', 4),
  singular2ndPerson: Word('застаиваешься', 4),
  singular3rdPerson: Word('застаивается', 4),
  plural1stPerson: Word('застаиваемся', 4),
  plural2ndPerson: Word('застаиваетесь', 4),
  plural3rdPerson: Word('застаиваются', 4),
  masculinePast: Word('застаивался', 4),
  femininePast: Word('застаивалась', 4),
  neuterPast: Word('застаивалось', 4),
  pluralPast: Word('застаивались', 4),
  imperativeInformal: Word('застаивайся', 4),
  imperativeFormal: Word('застаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(застаиваться.name.text, застаиваться);

export { застаиваться };