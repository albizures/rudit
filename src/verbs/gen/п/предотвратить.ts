import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предотвратить: PerfectVerb = {
  name: Word('предотвратить', 10),
  singular1stPerson: Word('предотвращу', 10),
  singular2ndPerson: Word('предотвратишь', 10),
  singular3rdPerson: Word('предотвратит', 10),
  plural1stPerson: Word('предотвратим', 10),
  plural2ndPerson: Word('предотвратите', 10),
  plural3rdPerson: Word('предотвратят', 10),
  masculinePast: Word('предотвратил', 10),
  femininePast: Word('предотвратила', 10),
  neuterPast: Word('предотвратило', 10),
  pluralPast: Word('предотвратили', 10),
  imperativeInformal: Word('предотврати', 10),
  imperativeFormal: Word('предотвратите', 10),
  imperfect: [],
};

perfectVerbs.set(предотвратить.name.text, предотвратить);

export { предотвратить };