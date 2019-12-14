import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облегчаться: PerfectVerb = {
  name: Word('облегчаться', 6),
  singular1stPerson: Word('облегчаюсь', 6),
  singular2ndPerson: Word('облегчаешься', 6),
  singular3rdPerson: Word('облегчается', 6),
  plural1stPerson: Word('облегчаемся', 6),
  plural2ndPerson: Word('облегчаетесь', 6),
  plural3rdPerson: Word('облегчаются', 6),
  masculinePast: Word('облегчался', 6),
  femininePast: Word('облегчалась', 6),
  neuterPast: Word('облегчалось', 6),
  pluralPast: Word('облегчались', 6),
  imperativeInformal: Word('облегчайся', 6),
  imperativeFormal: Word('облегчайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(облегчаться.name.text, облегчаться);

export { облегчаться };