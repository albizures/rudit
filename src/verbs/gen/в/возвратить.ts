import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвратить: PerfectVerb = {
  name: Word('возвратить', 7),
  singular1stPerson: Word('возвращу', 7),
  singular2ndPerson: Word('возвратишь', 7),
  singular3rdPerson: Word('возвратит', 7),
  plural1stPerson: Word('возвратим', 7),
  plural2ndPerson: Word('возвратите', 7),
  plural3rdPerson: Word('возвратят', 7),
  masculinePast: Word('возвратил', 7),
  femininePast: Word('возвратила', 7),
  neuterPast: Word('возвратило', 7),
  pluralPast: Word('возвратили', 7),
  imperativeInformal: Word('возврати', 7),
  imperativeFormal: Word('возвратите', 7),
  imperfect: ['возвращать'],
};

perfectVerbs.set(возвратить.name.text, возвратить);

export { возвратить };