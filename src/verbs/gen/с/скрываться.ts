import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрываться: PerfectVerb = {
  name: Word('скрываться', 5),
  singular1stPerson: Word('скрываюсь', 5),
  singular2ndPerson: Word('скрываешься', 5),
  singular3rdPerson: Word('скрывается', 5),
  plural1stPerson: Word('скрываемся', 5),
  plural2ndPerson: Word('скрываетесь', 5),
  plural3rdPerson: Word('скрываются', 5),
  masculinePast: Word('скрывался', 5),
  femininePast: Word('скрывалась', 5),
  neuterPast: Word('скрывалось', 5),
  pluralPast: Word('скрывались', 5),
  imperativeInformal: Word('скрывайся', 5),
  imperativeFormal: Word('скрывайтесь', 5),
  imperfect: ['скрыться'],
};

perfectVerbs.set(скрываться.name.text, скрываться);

export { скрываться };