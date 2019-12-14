import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увенчаться: PerfectVerb = {
  name: Word('увенчаться', 5),
  singular1stPerson: Word('увенчаюсь', 5),
  singular2ndPerson: Word('увенчаешься', 5),
  singular3rdPerson: Word('увенчается', 5),
  plural1stPerson: Word('увенчаемся', 5),
  plural2ndPerson: Word('увенчаетесь', 5),
  plural3rdPerson: Word('увенчаются', 5),
  masculinePast: Word('увенчался', 5),
  femininePast: Word('увенчалась', 5),
  neuterPast: Word('увенчалось', 5),
  pluralPast: Word('увенчались', 5),
  imperativeInformal: Word('увенчайся', 5),
  imperativeFormal: Word('увенчайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(увенчаться.name.text, увенчаться);

export { увенчаться };