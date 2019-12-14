import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшатываться: PerfectVerb = {
  name: Word('отшатываться', 3),
  singular1stPerson: Word('отшатываюсь', 3),
  singular2ndPerson: Word('отшатываешься', 3),
  singular3rdPerson: Word('отшатывается', 3),
  plural1stPerson: Word('отшатываемся', 3),
  plural2ndPerson: Word('отшатываетесь', 3),
  plural3rdPerson: Word('отшатываются', 3),
  masculinePast: Word('отшатывался', 3),
  femininePast: Word('отшатывалась', 3),
  neuterPast: Word('отшатывалось', 3),
  pluralPast: Word('отшатывались', 3),
  imperativeInformal: Word('отшатывайся', 3),
  imperativeFormal: Word('отшатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отшатываться.name.text, отшатываться);

export { отшатываться };