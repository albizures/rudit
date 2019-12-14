import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвратить: PerfectVerb = {
  name: Word('отвратить', 6),
  singular1stPerson: Word('отврачу', 6),
  singular2ndPerson: Word('отвратишь', 6),
  singular3rdPerson: Word('отвратит', 6),
  plural1stPerson: Word('отвратим', 6),
  plural2ndPerson: Word('отвратите', 6),
  plural3rdPerson: Word('отвратят', 6),
  masculinePast: Word('отвратил', 6),
  femininePast: Word('отвратила', 6),
  neuterPast: Word('отвратило', 6),
  pluralPast: Word('отвратили', 6),
  imperativeInformal: Word('отврати', 6),
  imperativeFormal: Word('отвратите', 6),
  imperfect: ['отвращать'],
};

perfectVerbs.set(отвратить.name.text, отвратить);

export { отвратить };