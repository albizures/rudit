import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const венчаться: PerfectVerb = {
  name: Word('венчаться', 4),
  singular1stPerson: Word('венчаюсь', 4),
  singular2ndPerson: Word('венчаешься', 4),
  singular3rdPerson: Word('венчается', 4),
  plural1stPerson: Word('венчаемся', 4),
  plural2ndPerson: Word('венчаетесь', 4),
  plural3rdPerson: Word('венчаются', 4),
  masculinePast: Word('венчался', 4),
  femininePast: Word('венчалась', 4),
  neuterPast: Word('венчалось', 4),
  pluralPast: Word('венчались', 4),
  imperativeInformal: Word('венчайся', 4),
  imperativeFormal: Word('венчайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(венчаться.name.text, венчаться);

export { венчаться };