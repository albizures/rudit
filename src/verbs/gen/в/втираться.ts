import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втираться: PerfectVerb = {
  name: Word('втираться', 4),
  singular1stPerson: Word('втираюсь', 4),
  singular2ndPerson: Word('втираешься', 4),
  singular3rdPerson: Word('втирается', 4),
  plural1stPerson: Word('втираемся', 4),
  plural2ndPerson: Word('втираетесь', 4),
  plural3rdPerson: Word('втираются', 4),
  masculinePast: Word('втирался', 4),
  femininePast: Word('втиралась', 4),
  neuterPast: Word('втиралось', 4),
  pluralPast: Word('втирались', 4),
  imperativeInformal: Word('втирайся', 4),
  imperativeFormal: Word('втирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(втираться.name.text, втираться);

export { втираться };