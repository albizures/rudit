import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчаиваться: PerfectVerb = {
  name: Word('отчаиваться', 3),
  singular1stPerson: Word('отчаиваюсь', 3),
  singular2ndPerson: Word('отчаиваешься', 3),
  singular3rdPerson: Word('отчаивается', 3),
  plural1stPerson: Word('отчаиваемся', 3),
  plural2ndPerson: Word('отчаиваетесь', 3),
  plural3rdPerson: Word('отчаиваются', 3),
  masculinePast: Word('отчаивался', 3),
  femininePast: Word('отчаивалась', 3),
  neuterPast: Word('отчаивалось', 3),
  pluralPast: Word('отчаивались', 3),
  imperativeInformal: Word('отчаивайся', 3),
  imperativeFormal: Word('отчаивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отчаиваться.name.text, отчаиваться);

export { отчаиваться };