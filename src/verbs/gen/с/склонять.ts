import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склонять: PerfectVerb = {
  name: Word('склонять', 5),
  singular1stPerson: Word('склоняю', 5),
  singular2ndPerson: Word('склоняешь', 5),
  singular3rdPerson: Word('склоняет', 5),
  plural1stPerson: Word('склоняем', 5),
  plural2ndPerson: Word('склоняете', 5),
  plural3rdPerson: Word('склоняют', 5),
  masculinePast: Word('склонял', 5),
  femininePast: Word('склоняла', 5),
  neuterPast: Word('склоняло', 5),
  pluralPast: Word('склоняли', 5),
  imperativeInformal: Word('склоняй', 5),
  imperativeFormal: Word('склоняйте', 5),
  imperfect: ['склонить','просклонять'],
};

perfectVerbs.set(склонять.name.text, склонять);

export { склонять };