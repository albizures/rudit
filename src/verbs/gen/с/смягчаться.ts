import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смягчаться: PerfectVerb = {
  name: Word('смягчаться', 5),
  singular1stPerson: Word('смягчаюсь', 5),
  singular2ndPerson: Word('смягчаешься', 5),
  singular3rdPerson: Word('смягчается', 5),
  plural1stPerson: Word('смягчаемся', 5),
  plural2ndPerson: Word('смягчаетесь', 5),
  plural3rdPerson: Word('смягчаются', 5),
  masculinePast: Word('смягчался', 5),
  femininePast: Word('смягчалась', 5),
  neuterPast: Word('смягчалось', 5),
  pluralPast: Word('смягчались', 5),
  imperativeInformal: Word('смягчайся', 5),
  imperativeFormal: Word('смягчайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(смягчаться.name.text, смягчаться);

export { смягчаться };