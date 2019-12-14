import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огорчаться: PerfectVerb = {
  name: Word('огорчаться', 5),
  singular1stPerson: Word('огорчаюсь', 5),
  singular2ndPerson: Word('огорчаешься', 5),
  singular3rdPerson: Word('огорчается', 5),
  plural1stPerson: Word('огорчаемся', 5),
  plural2ndPerson: Word('огорчаетесь', 5),
  plural3rdPerson: Word('огорчаются', 5),
  masculinePast: Word('огорчался', 5),
  femininePast: Word('огорчалась', 5),
  neuterPast: Word('огорчалось', 5),
  pluralPast: Word('огорчались', 5),
  imperativeInformal: Word('огорчайся', 5),
  imperativeFormal: Word('огорчайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(огорчаться.name.text, огорчаться);

export { огорчаться };