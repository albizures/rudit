import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслаиваться: PerfectVerb = {
  name: Word('расслаиваться', 5),
  singular1stPerson: Word('расслаиваюсь', 5),
  singular2ndPerson: Word('расслаиваешься', 5),
  singular3rdPerson: Word('расслаивается', 5),
  plural1stPerson: Word('расслаиваемся', 5),
  plural2ndPerson: Word('расслаиваетесь', 5),
  plural3rdPerson: Word('расслаиваются', 5),
  masculinePast: Word('расслаивался', 5),
  femininePast: Word('расслаивалась', 5),
  neuterPast: Word('расслаивалось', 5),
  pluralPast: Word('расслаивались', 5),
  imperativeInformal: Word('расслаивайся', 5),
  imperativeFormal: Word('расслаивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расслаиваться.name.text, расслаиваться);

export { расслаиваться };