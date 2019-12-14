import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчаяться: PerfectVerb = {
  name: Word('отчаяться', 3),
  singular1stPerson: Word('отчаюсь', 3),
  singular2ndPerson: Word('отчаешься', 3),
  singular3rdPerson: Word('отчается', 3),
  plural1stPerson: Word('отчаемся', 3),
  plural2ndPerson: Word('отчаетесь', 3),
  plural3rdPerson: Word('отчаются', 3),
  masculinePast: Word('отчаялся', 3),
  femininePast: Word('отчаялась', 3),
  neuterPast: Word('отчаялось', 3),
  pluralPast: Word('отчаялись', 3),
  imperativeInformal: Word('отчайся', 3),
  imperativeFormal: Word('отчайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отчаяться.name.text, отчаяться);

export { отчаяться };