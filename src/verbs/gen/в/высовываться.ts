import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высовываться: PerfectVerb = {
  name: Word('высовываться', 3),
  singular1stPerson: Word('высовываюсь', 3),
  singular2ndPerson: Word('высовываешься', 3),
  singular3rdPerson: Word('высовывается', 3),
  plural1stPerson: Word('высовываемся', 3),
  plural2ndPerson: Word('высовываетесь', 3),
  plural3rdPerson: Word('высовываются', 3),
  masculinePast: Word('высовывался', 3),
  femininePast: Word('высовывалась', 3),
  neuterPast: Word('высовывалось', 3),
  pluralPast: Word('высовывались', 3),
  imperativeInformal: Word('высовывайся', 3),
  imperativeFormal: Word('высовывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(высовываться.name.text, высовываться);

export { высовываться };