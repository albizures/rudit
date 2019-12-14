import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ополчаться: PerfectVerb = {
  name: Word('ополчаться', 5),
  singular1stPerson: Word('ополчаюсь', 5),
  singular2ndPerson: Word('ополчаешься', 5),
  singular3rdPerson: Word('ополчается', 5),
  plural1stPerson: Word('ополчаемся', 5),
  plural2ndPerson: Word('ополчаетесь', 5),
  plural3rdPerson: Word('ополчаются', 5),
  masculinePast: Word('ополчался', 5),
  femininePast: Word('ополчалась', 5),
  neuterPast: Word('ополчалось', 5),
  pluralPast: Word('ополчались', 5),
  imperativeInformal: Word('ополчайся', 5),
  imperativeFormal: Word('ополчайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ополчаться.name.text, ополчаться);

export { ополчаться };